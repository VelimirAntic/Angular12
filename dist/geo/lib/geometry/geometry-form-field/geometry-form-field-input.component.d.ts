import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import * as OlStyle from 'ol/style';
import OlGeometry from 'ol/geom/Geometry';
import type { default as OlGeometryType } from 'ol/geom/GeometryType';
import OlVectorSource from 'ol/source/Vector';
import { IgoMap } from '../../map';
import { DrawControl, ModifyControl } from '../shared/controls';
import { GeoJSONGeometry } from '../shared/geometry.interfaces';
import * as i0 from "@angular/core";
/**
 * This input allows a user to draw a new geometry or to edit
 * an existing one on a map. A text input is also displayed in the
 * form with some instructions.
 * This is still WIP.
 */
export declare class GeometryFormFieldInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private cdRef;
    ngControl: NgControl;
    private olOverlayLayer;
    private olGeoJSON;
    private ready;
    private drawControl;
    private modifyControl;
    private defaultDrawStyleRadius;
    private olGeometryEnds$$;
    private olGeometryChanges$$;
    private olTooltip;
    /**
     * Active control
     * @internal
     */
    activeControl: DrawControl | ModifyControl;
    /**
     * The map to draw the geometry on
     */
    map: IgoMap;
    /**
     * The geometry type
     */
    set geometryType(value: typeof OlGeometryType);
    get geometryType(): typeof OlGeometryType;
    private _geometryType;
    /**
     * The drawGuide around the mouse pointer to help drawing
     */
    drawGuide: number;
    /**
     * Whether a measure tooltip should be displayed
     */
    measure: boolean;
    /**
     * Whether draw control should be active or not
     */
    get drawControlIsActive(): boolean;
    set drawControlIsActive(value: boolean);
    private _drawControlIsActive;
    /**
     * Whether freehand draw control should be active or not
     */
    get freehandDrawIsActive(): boolean;
    set freehandDrawIsActive(value: boolean);
    private _freehandDrawIsActive;
    /**
     * Control options
     */
    controlOptions: {
        [key: string]: any;
    };
    /**
     * Style for the draw control (applies while the geometry is being drawn)
     */
    set drawStyle(value: OlStyle.Style | ((feature: any, resolution: any) => OlStyle.Style) | OlStyle.Circle);
    get drawStyle(): OlStyle.Style | ((feature: any, resolution: any) => OlStyle.Style) | OlStyle.Circle;
    private _drawStyle;
    /**
     * Style for the overlay layer (applies once the geometry is added to the map)
     * If not specified, drawStyle applies
     */
    set overlayStyle(value: OlStyle.Style | ((feature: any, resolution: any) => OlStyle.Style) | OlStyle.Circle);
    get overlayStyle(): OlStyle.Style | ((feature: any, resolution: any) => OlStyle.Style) | OlStyle.Circle;
    private _overlayStyle;
    /**
     * The geometry value (GeoJSON)
     * Implemented as part of ControlValueAccessor.
     */
    set value(value: GeoJSONGeometry);
    get value(): GeoJSONGeometry;
    private _value;
    /**
     * The vector source to add the geometry to
     * @internal
     */
    get olOverlaySource(): OlVectorSource<OlGeometry>;
    set radius(value: any);
    constructor(cdRef: ChangeDetectorRef, ngControl: NgControl);
    /**
     * Create an overlay layer, add the initial geometry to it (if any)
     * and toggle the right interaction.
     * @internal
     */
    ngOnInit(): void;
    /**
     * Clear the overlay layer and any interaction added by this component.
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    registerOnChange(fn: Function): void;
    private onChange;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    registerOnTouched(fn: Function): void;
    private onTouched;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: GeoJSONGeometry): void;
    /**
     * Add an overlay layer to the map
     */
    private addOlOverlayLayer;
    /**
     * Create a draw control and subscribe to it's geometry
     */
    private createDrawControl;
    /**
     * Create a modify control and subscribe to it's geometry
     */
    private createModifyControl;
    /**
     * Toggle the proper control (draw or modify)
     */
    private toggleControl;
    /**
     * Activate a given control
     * @param control Control
     */
    private activateControl;
    /**
     * Deactivate the active control
     */
    private deactivateControl;
    /**
     * Update measures observables and map tooltips
     * @param olGeometry Ol linestring or polygon
     */
    private onOlGeometryEnds;
    /**
     * Update measures observables and map tooltips
     * @param olGeometry Ol linestring or polygon
     */
    private onOlGeometryChanges;
    /**
     * When drawing ends, convert the output value to GeoJSON and keep it.
     * Restore the double click interaction.
     * @param olGeometry OL geometry
     */
    private setOlGeometry;
    private circleToPoint;
    /**
     * Add a GeoJSON geometry to the overlay
     * @param geometry GeoJSON geometry
     */
    private addGeoJSONToOverlay;
    /**
     * Create the measure tooltip
     */
    private createMeasureTooltip;
    /**
     * Update the measure tooltip of an OL geometry
     * @param olGeometry OL Geometry
     */
    private updateMeasureTooltip;
    /**
     * Remove the measure tooltip from the map
     */
    private removeMeasureTooltip;
    /**
     * Adjust the draw style with the specified draw guide distance, if possible
     * @param olStyle Draw style to update
     * @param resolution Resolution (to make the screen size of symbol fit the drawGuide value)
     */
    private updateDrawStyleWithDrawGuide;
    /**
     * Returns wether a given Open Layers style has a radius property that can be set (used to set draw guide)
     * @param olStyle The style on which to perform the check
     */
    private isStyleWithRadius;
    /**
     * Returns wether a given Open Layers style has a radius property that can be set (used to set draw guide)
     * @param olStyle The style on which to perform the check
     */
    private getGuideStyleFromDrawStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryFormFieldInputComponent, [null, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryFormFieldInputComponent, "igo-geometry-form-field-input", never, { "map": "map"; "geometryType": "geometryType"; "drawGuide": "drawGuide"; "measure": "measure"; "drawControlIsActive": "drawControlIsActive"; "freehandDrawIsActive": "freehandDrawIsActive"; "controlOptions": "controlOptions"; "drawStyle": "drawStyle"; "overlayStyle": "overlayStyle"; "value": "value"; "radius": "radius"; }, {}, never, never>;
}
