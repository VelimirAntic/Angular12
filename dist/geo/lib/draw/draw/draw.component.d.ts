import { OnInit, OnDestroy } from '@angular/core';
import { FeatureStore } from '../../feature';
import { LanguageService } from '@igo2/core';
import { MatDialog } from '@angular/material/dialog';
import { GeometryType } from '../shared/draw.enum';
import { IgoMap } from '../../map/shared/map';
import { BehaviorSubject } from 'rxjs';
import { Draw, FeatureWithDraw } from '../shared/draw.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DrawControl } from '../../geometry/shared/controls/draw';
import { EntityTableTemplate } from '@igo2/common';
import type { default as OlGeometryType } from 'ol/geom/GeometryType';
import { DrawStyleService } from '../shared/draw-style.service';
import { DrawIconService } from '../shared/draw-icon.service';
import * as i0 from "@angular/core";
export declare class DrawComponent implements OnInit, OnDestroy {
    private languageService;
    private formBuilder;
    private drawStyleService;
    private dialog;
    private drawIconService;
    /**
     * Table template
     * @internal
     */
    tableTemplate: EntityTableTemplate;
    geometryType: typeof GeometryType;
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
    map: IgoMap;
    store: FeatureStore<FeatureWithDraw>;
    draw$: BehaviorSubject<Draw>;
    private olDrawingLayerSource;
    private drawControl;
    private drawEnd$$;
    private drawSelect$$;
    private olDrawingLayer;
    selectedFeatures$: BehaviorSubject<FeatureWithDraw[]>;
    fillForm: string;
    strokeForm: string;
    drawControlIsDisabled: boolean;
    drawControlIsActive: boolean;
    labelsAreShown: boolean;
    private subscriptions$$;
    position: string;
    form: FormGroup;
    icons: Array<string>;
    icon: string;
    constructor(languageService: LanguageService, formBuilder: FormBuilder, drawStyleService: DrawStyleService, dialog: MatDialog, drawIconService: DrawIconService);
    ngOnInit(): void;
    /**
     * Remove the drawing layer and the interactions
     * @internal
     */
    ngOnDestroy(): void;
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
    onGeometryTypeChange(geometryType: typeof OlGeometryType): void;
    /**
     * Store initialization, including drawing layer creation
     */
    private initStore;
    /**
     * Called when the user changes the color in a color picker
     * @param labelsAreShown wheter the labels are shown or not
     * @param isAnIcon wheter the feature is an icon or not
     */
    onColorChange(labelsAreShown: boolean, isAnIcon: boolean): void;
    /**
     * Called when the user toggles the Draw control is toggled
     * @internal
     */
    onToggleDrawControl(toggleIsChecked: boolean): void;
    /**
     * Activate the correct control
     */
    private toggleDrawControl;
    /**
     * Open a dialog box to enter label and do something
     * @param olGeometry geometry at draw end or selected geometry
     * @param drawEnd event fired at drawEnd?
     */
    private openDialog;
    /**
     * Activate a given control
     */
    private activateDrawControl;
    /**
     * Deactivate the active draw control
     */
    private deactivateDrawControl;
    /**
     * Clear the draw source and track the geometry being draw
     * @param olGeometry Ol linestring or polygon
     */
    private onDrawEnd;
    private onModifyDraw;
    private onSelectDraw;
    /**
     * Add a feature with draw label to the store. The loading stragegy of the store
     * will trigger and add the feature to the map.
     * @internal
     */
    private addFeatureToStore;
    /**
     * Replace the feature in the store
     * @param entity the entity to replace
     * @param olGeometry the new geometry to insert in the store
     */
    private replaceFeatureInStore;
    private buildForm;
    deleteDrawings(): void;
    /**
     * Clear the tooltips of an OL geometry
     * @param olGeometry OL geometry with tooltips
     */
    private clearLabelsOfOlGeometry;
    /**
     * Called when the user toggles the labels toggle
     */
    onToggleLabels(): void;
    /**
     * Update the label of a geometry when a label is entered in a dialog box
     * @param olGeometry the geometry
     * @param label the label
     */
    private updateLabelOfOlGeometry;
    onIconChange(event?: any): void;
    openShorcutsDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawComponent, "igo-draw", never, { "map": "map"; "store": "store"; }, { "fillColor": "fillColor"; "strokeColor": "strokeColor"; "strokeWidth": "strokeWidth"; }, never, never>;
}
