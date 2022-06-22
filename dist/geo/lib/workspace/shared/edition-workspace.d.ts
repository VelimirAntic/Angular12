import { MatDialog } from '@angular/material/dialog';
import { Workspace, WorkspaceOptions } from '@igo2/common';
import { ConfigService } from '@igo2/core';
import { BehaviorSubject } from 'rxjs';
import { ImageLayer, VectorLayer } from '../../layer';
import { IgoMap } from '../../map';
import { EditionWorkspaceService } from './edition-workspace.service';
import { DrawControl } from '../../geometry';
import { GeometryType } from '../../draw';
import type { default as OlGeometryType } from 'ol/geom/GeometryType';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import * as OlStyle from 'ol/style';
import OlFeature from 'ol/Feature';
export interface EditionWorkspaceOptions extends WorkspaceOptions {
    layer: ImageLayer | VectorLayer;
    map: IgoMap;
}
export declare class EditionWorkspace extends Workspace {
    protected options: EditionWorkspaceOptions;
    private editionWorkspaceService;
    private dialog;
    private configService;
    readonly inResolutionRange$: BehaviorSubject<boolean>;
    get layer(): ImageLayer | VectorLayer;
    get map(): IgoMap;
    private drawControl;
    private drawEnd$$;
    private olDrawingLayerSource;
    private olDrawingLayer;
    geometryType: typeof GeometryType;
    modify: any;
    modifyStyle: OlStyle.Style;
    private filterClauseFunc;
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
    constructor(options: EditionWorkspaceOptions, editionWorkspaceService: EditionWorkspaceService, dialog: MatDialog, configService: ConfigService);
    private getInResolutionRange;
    deleteFeature(feature: any, workspace: any): void;
    editFeature(feature: any, workspace: EditionWorkspace): void;
    /**
     * Create a Draw Control
     * @param fillColor the fill color
     * @param strokeColor the stroke color
     * @param strokeWidth the stroke width
     * @returns a Draw Control
     */
    createDrawControl(fillColor?: string, strokeColor?: string, strokeWidth?: number): DrawControl;
    /**
     * Called when the user selects a new geometry type
     * @param geometryType the geometry type selected by the user
     */
    onGeometryTypeChange(geometryType: typeof OlGeometryType, feature: any, workspace: EditionWorkspace): void;
    /**
     * Activate the correct control
     */
    private toggleDrawControl;
    /**
     * Deactivate the active draw control
     */
    deactivateDrawControl(): void;
    /**
     * Activate a given control
     */
    private activateDrawControl;
    /**
     * Add a feature to layer. The loading strategy of the layer
     * will trigger and add the feature to the workspace store.
     * @internal
     */
    private addFeatureToStore;
    /**
     * Delete drawings layer and source from the map AND feature from the entity store.
     * Layer refresh will automatically add the new feature into the store.
     */
    deleteDrawings(): void;
    /**
     * Create a modify interaction to allow a geometry change one feature at the time (drag and drop)
     */
    createModifyInteraction(olFeature: OlFeature<OlGeometry>, feature: any, workspace: EditionWorkspace): void;
}
