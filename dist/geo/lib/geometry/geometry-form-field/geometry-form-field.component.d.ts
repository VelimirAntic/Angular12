import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import type { default as OlGeometryType } from 'ol/geom/GeometryType';
import * as OlStyle from 'ol/style';
import { BehaviorSubject } from 'rxjs';
import { IgoMap } from '../../map';
import { GeoJSONGeometry } from '../shared/geometry.interfaces';
import * as i0 from "@angular/core";
/**
 * This input allows a user to draw a new geometry or to edit
 * an existing one on a map.
 */
export declare class GeometryFormFieldComponent implements OnInit, OnDestroy {
    private cdRef;
    readonly value$: BehaviorSubject<GeoJSONGeometry>;
    private value$$;
    set drawControlIsActive(value: boolean);
    get drawControlIsActive(): boolean;
    private _drawControlIsActive;
    set freehandDrawIsActive(value: boolean);
    get freehandDrawIsActive(): boolean;
    private _freehandDrawIsActive;
    /**
     * The field's form control
     */
    formControl: FormControl;
    /**
     * The map to draw the geometry on
     */
    map: IgoMap;
    set geometryType(value: typeof OlGeometryType);
    get geometryType(): typeof OlGeometryType;
    readonly geometryType$: BehaviorSubject<typeof OlGeometryType>;
    /**
     * Whether a geometry type toggle should be displayed
     */
    geometryTypeField: boolean;
    /**
     * Available geometry types
     */
    geometryTypes: string[];
    /**
     * Whether a draw guide field should be displayed
     */
    drawGuideField: boolean;
    /**
     * The drawGuide around the mouse pointer to help drawing
     */
    set drawGuide(value: number);
    get drawGuide(): number;
    readonly drawGuide$: BehaviorSubject<number>;
    /**
     * Draw guide placeholder
     */
    drawGuidePlaceholder: string;
    /**
     * Whether a measure tooltip should be displayed
     */
    measure: boolean;
    /**
     * Control options
     */
    controlOptions: {
        [key: string]: any;
    };
    /**
     * Style for the draw control (applies while the geometry is being drawn)
     */
    drawStyle: OlStyle.Style;
    /**
     * Style for the overlay layer (applies once the geometry is added to the map)
     * If not specified, drawStyle applies
     */
    overlayStyle: OlStyle.Style;
    constructor(cdRef: ChangeDetectorRef);
    /**
     * Set up a value stream
     * @internal
     */
    ngOnInit(): void;
    /**
     * Unsubscribe to the value stream
     * @internal
     */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryFormFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryFormFieldComponent, "igo-geometry-form-field", never, { "formControl": "formControl"; "map": "map"; "geometryType": "geometryType"; "geometryTypeField": "geometryTypeField"; "geometryTypes": "geometryTypes"; "drawGuideField": "drawGuideField"; "drawGuide": "drawGuide"; "drawGuidePlaceholder": "drawGuidePlaceholder"; "measure": "measure"; "controlOptions": "controlOptions"; "drawStyle": "drawStyle"; "overlayStyle": "overlayStyle"; }, {}, never, never>;
}
