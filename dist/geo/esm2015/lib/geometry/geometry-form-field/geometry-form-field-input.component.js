import { Component, Input, Optional, Self, ChangeDetectionStrategy } from '@angular/core';
import OlGeoJSON from 'ol/format/GeoJSON';
import OlFeature from 'ol/Feature';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';
import OlOverlay from 'ol/Overlay';
import * as olproj from 'ol/proj';
import Point from 'ol/geom/Point';
import { MeasureLengthUnit, updateOlGeometryMidpoints, formatMeasure, measureOlGeometry } from '../../measure';
import { DrawControl, ModifyControl } from '../shared/controls';
import { createDrawInteractionStyle } from '../shared/geometry.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function GeometryFormFieldInputComponent_ng_template_0_Template(rf, ctx) { }
/**
 * This input allows a user to draw a new geometry or to edit
 * an existing one on a map. A text input is also displayed in the
 * form with some instructions.
 * This is still WIP.
 */
export class GeometryFormFieldInputComponent {
    constructor(cdRef, ngControl) {
        this.cdRef = cdRef;
        this.ngControl = ngControl;
        this.olGeoJSON = new OlGeoJSON();
        this.ready = false;
        this.olTooltip = this.createMeasureTooltip();
        /**
         * The drawGuide around the mouse pointer to help drawing
         */
        this.drawGuide = null;
        /**
         * Whether a measure tooltip should be displayed
         */
        this.measure = false;
        this._drawControlIsActive = true;
        /**
         * Control options
         */
        this.controlOptions = {};
        this.onChange = () => { };
        this.onTouched = () => { };
        if (this.ngControl !== undefined) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * The geometry type
     */
    set geometryType(value) {
        this._geometryType = value;
        if (this.ready === false) {
            return;
        }
        this.deactivateControl();
        this.createDrawControl();
        this.drawControl.freehand$.next(this.freehandDrawIsActive);
        this.toggleControl();
    }
    get geometryType() { return this._geometryType; }
    /**
     * Whether draw control should be active or not
     */
    get drawControlIsActive() { return this._drawControlIsActive; }
    set drawControlIsActive(value) {
        this._drawControlIsActive = value;
        if (this.ready === false) {
            return;
        }
        this.deactivateControl();
        if (!this._drawControlIsActive) {
            return;
        }
        else {
            this.toggleControl();
        }
    }
    /**
     * Whether freehand draw control should be active or not
     */
    get freehandDrawIsActive() { return this._freehandDrawIsActive; }
    set freehandDrawIsActive(value) {
        this._freehandDrawIsActive = value;
        this.deactivateControl();
        this.createDrawControl();
        this.createModifyControl();
        this.drawControl.freehand$.next(this.freehandDrawIsActive);
        if (this.ready === false) {
            return;
        }
        if (!this.drawControlIsActive) {
            return;
        }
        this.toggleControl();
    }
    /**
     * Style for the draw control (applies while the geometry is being drawn)
     */
    set drawStyle(value) {
        if (value === undefined) {
            value = createDrawInteractionStyle();
        }
        this._drawStyle = value;
        const olGuideStyle = this.getGuideStyleFromDrawStyle(value);
        if (olGuideStyle !== undefined) {
            this.defaultDrawStyleRadius = olGuideStyle.getRadius();
        }
        else {
            this.defaultDrawStyleRadius = null;
        }
        if (this.ready === false) {
            return;
        }
        this.deactivateControl();
        this.createDrawControl();
        this.createModifyControl();
        this.drawControl.freehand$.next(this.freehandDrawIsActive);
        this.toggleControl();
    }
    get drawStyle() { return this._drawStyle; }
    /**
     * Style for the overlay layer (applies once the geometry is added to the map)
     * If not specified, drawStyle applies
     */
    set overlayStyle(value) { this._overlayStyle = value; }
    get overlayStyle() { return this._overlayStyle; }
    /**
     * The geometry value (GeoJSON)
     * Implemented as part of ControlValueAccessor.
     */
    set value(value) {
        this._value = value;
        if (this.ready === false) {
            return;
        }
        if (value) {
            this.addGeoJSONToOverlay(value);
        }
        else {
            this.olOverlaySource.clear(true);
        }
        this.onChange(value);
        this.toggleControl();
        this.cdRef.detectChanges();
    }
    get value() { return this._value; }
    /**
     * The vector source to add the geometry to
     * @internal
     */
    get olOverlaySource() {
        return this.olOverlayLayer.getSource();
    }
    set radius(value) {
        if (this.ready === false) {
            return;
        }
        if (this.modifyControl.getSource()) {
            this.modifyControl.getSource().refresh();
        }
        if (this.freehandDrawIsActive) {
            let olModify;
            setTimeout(() => {
                olModify = this.modifyControl.olModifyInteraction;
                if (olModify) {
                    if (olModify.features_) {
                        olModify.features_.clear();
                        this.addGeoJSONToOverlay(this.value);
                    }
                }
            }, 0);
        }
    }
    /**
     * Create an overlay layer, add the initial geometry to it (if any)
     * and toggle the right interaction.
     * @internal
     */
    ngOnInit() {
        if (this.drawStyle === undefined) {
            this.drawStyle = createDrawInteractionStyle();
        }
        if (this.overlayStyle === undefined) {
            this.overlayStyle = this.drawStyle;
        }
        this.addOlOverlayLayer();
        this.createDrawControl();
        this.createModifyControl();
        if (this.value) {
            this.addGeoJSONToOverlay(this.value);
        }
        this.toggleControl();
        this.ready = true;
    }
    /**
     * Clear the overlay layer and any interaction added by this component.
     * @internal
     */
    ngOnDestroy() {
        // This is mandatory when the form control is reused after
        // this component has been destroyed. It seems like the control
        // keeps a reference to this component even after it's destroyed
        // and it attempts to set it's value
        this.ready = false;
        this.deactivateControl();
        this.olOverlaySource.clear();
        this.map.ol.removeLayer(this.olOverlayLayer);
    }
    /**
     * Implemented as part of ControlValueAccessor.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Add an overlay layer to the map
     */
    addOlOverlayLayer() {
        this.olOverlayLayer = new OlVectorLayer({
            source: new OlVectorSource(),
            zIndex: 500,
            style: null
        });
        this.map.ol.addLayer(this.olOverlayLayer);
    }
    /**
     * Create a draw control and subscribe to it's geometry
     */
    createDrawControl() {
        const controlOptions = Object.assign({}, this.controlOptions, {
            geometryType: this.geometryType || 'Point',
            drawingLayer: this.olOverlayLayer,
            interactionStyle: typeof this.drawStyle === 'function' ? this.drawStyle : (olFeature, resolution) => {
                const style = this.drawStyle;
                this.updateDrawStyleWithDrawGuide(style, resolution);
                return style;
            }
        });
        this.drawControl = new DrawControl(controlOptions);
    }
    /**
     * Create a modify control and subscribe to it's geometry
     */
    createModifyControl() {
        const controlOptions = Object.assign({}, this.controlOptions, {
            layer: this.olOverlayLayer,
            drawStyle: typeof this.drawStyle === 'function' ? this.drawStyle : (olFeature, resolution) => {
                const style = this.drawStyle;
                this.updateDrawStyleWithDrawGuide(style, resolution);
                return style;
            }
        });
        this.modifyControl = new ModifyControl(controlOptions);
    }
    /**
     * Toggle the proper control (draw or modify)
     */
    toggleControl() {
        let activate;
        if (!this.value && this.geometryType) {
            activate = this.drawControl;
        }
        else {
            activate = this.modifyControl;
        }
        // If the control that should be activated
        // is not the same as the current active control,
        // deactivate the current control and activate the new one
        // Otherwise, do nothing and keep the current control active
        if (activate !== this.activeControl) {
            this.deactivateControl();
            this.activateControl(activate);
        }
    }
    /**
     * Activate a given control
     * @param control Control
     */
    activateControl(control) {
        this.activeControl = control;
        this.olGeometryEnds$$ = control.end$
            .subscribe((olGeometry) => this.onOlGeometryEnds(olGeometry));
        if (this.measure === true && control === this.drawControl) {
            this.olGeometryChanges$$ = control.changes$
                .subscribe((olGeometry) => this.onOlGeometryChanges(olGeometry));
        }
        control.setOlMap(this.map.ol, false);
    }
    /**
     * Deactivate the active control
     */
    deactivateControl() {
        this.removeMeasureTooltip();
        if (this.activeControl !== undefined) {
            this.activeControl.setOlMap(undefined);
        }
        if (this.olGeometryEnds$$ !== undefined) {
            this.olGeometryEnds$$.unsubscribe();
        }
        if (this.olGeometryChanges$$ !== undefined) {
            this.olGeometryChanges$$.unsubscribe();
        }
        this.activeControl = undefined;
    }
    /**
     * Update measures observables and map tooltips
     * @param olGeometry Ol linestring or polygon
     */
    onOlGeometryEnds(olGeometry) {
        this.removeMeasureTooltip();
        this.setOlGeometry(olGeometry);
    }
    /**
     * Update measures observables and map tooltips
     * @param olGeometry Ol linestring or polygon
     */
    onOlGeometryChanges(olGeometry) {
        if (olGeometry.getType() !== 'Point') {
            this.updateMeasureTooltip(olGeometry);
        }
    }
    /**
     * When drawing ends, convert the output value to GeoJSON and keep it.
     * Restore the double click interaction.
     * @param olGeometry OL geometry
     */
    setOlGeometry(olGeometry) {
        let value;
        if (olGeometry === undefined) {
            return;
        }
        if (olGeometry.getType() === 'Circle') { // Because Circle doesn't exist as a GeoJSON object
            olGeometry = this.circleToPoint(olGeometry);
        }
        value = this.olGeoJSON.writeGeometryObject(olGeometry, {
            featureProjection: this.map.projection,
            dataProjection: 'EPSG:4326'
        });
        if (olGeometry.get('radius')) {
            value.radius = olGeometry.get('radius');
            olGeometry.set('radius', value.radius);
        }
        this.writeValue(value);
    }
    circleToPoint(olGeometry) {
        const center = olGeometry.getCenter();
        const coordinates = olproj.transform(center, this.map.projection, 'EPSG:4326');
        const radius = Math.round(olGeometry.getRadius() * (Math.cos((Math.PI / 180) * coordinates[1])));
        // Convert it to a point object
        olGeometry = new Point(center);
        olGeometry.set('radius', radius, true);
        return olGeometry;
    }
    /**
     * Add a GeoJSON geometry to the overlay
     * @param geometry GeoJSON geometry
     */
    addGeoJSONToOverlay(geometry) {
        const olGeometry = this.olGeoJSON.readGeometry(geometry, {
            dataProjection: 'EPSG:4326',
            featureProjection: this.map.projection
        });
        const olFeature = new OlFeature({
            geometry: olGeometry
        });
        olFeature.setStyle(this.overlayStyle);
        this.olOverlaySource.clear();
        this.olOverlaySource.addFeature(olFeature);
    }
    /**
     * Create the measure tooltip
     */
    createMeasureTooltip() {
        return new OlOverlay({
            element: document.createElement('div'),
            offset: [-30, -10],
            className: [
                'igo-map-tooltip',
                'igo-map-tooltip-measure'
            ].join(' '),
            stopEvent: false
        });
    }
    /**
     * Update the measure tooltip of an OL geometry
     * @param olGeometry OL Geometry
     */
    updateMeasureTooltip(olGeometry) {
        const measure = measureOlGeometry(olGeometry, this.map.projection);
        const lengths = measure.lengths;
        const lastIndex = olGeometry.getType() === 'Polygon' ? lengths.length - 2 : lengths.length - 1;
        const lastLength = lengths[lastIndex];
        const olMidpoints = updateOlGeometryMidpoints(olGeometry);
        const olLastMidpoint = olMidpoints[lastIndex];
        if (olMidpoints.length === 0 || olLastMidpoint === undefined) {
            this.removeMeasureTooltip();
            return;
        }
        this.olTooltip.setPosition(olLastMidpoint.getFlatCoordinates());
        const innerHtml = formatMeasure(lastLength, {
            decimal: 1,
            unit: MeasureLengthUnit.Meters,
            unitAbbr: true,
            locale: 'fr'
        });
        this.olTooltip.getElement().innerHTML = innerHtml;
        if (this.olTooltip.getMap() === undefined) {
            this.map.ol.addOverlay(this.olTooltip);
        }
    }
    /**
     * Remove the measure tooltip from the map
     */
    removeMeasureTooltip() {
        if (this.olTooltip.getMap && this.olTooltip.getMap() !== undefined) {
            this.map.ol.removeOverlay(this.olTooltip);
            this.olTooltip.setMap(undefined);
        }
    }
    /**
     * Adjust the draw style with the specified draw guide distance, if possible
     * @param olStyle Draw style to update
     * @param resolution Resolution (to make the screen size of symbol fit the drawGuide value)
     */
    updateDrawStyleWithDrawGuide(olStyle, resolution) {
        const olGuideStyle = this.getGuideStyleFromDrawStyle(olStyle);
        if (olGuideStyle === undefined) {
            return;
        }
        const drawGuide = this.drawGuide;
        let radius;
        if (!drawGuide || drawGuide < 0) {
            radius = this.defaultDrawStyleRadius;
        }
        else {
            radius = drawGuide > 0 ? drawGuide / resolution : drawGuide;
        }
        olGuideStyle.setRadius(radius);
    }
    /**
     * Returns wether a given Open Layers style has a radius property that can be set (used to set draw guide)
     * @param olStyle The style on which to perform the check
     */
    isStyleWithRadius(olStyle) {
        return typeof olStyle !== 'function' && olStyle.setRadius;
    }
    /**
     * Returns wether a given Open Layers style has a radius property that can be set (used to set draw guide)
     * @param olStyle The style on which to perform the check
     */
    getGuideStyleFromDrawStyle(olStyle) {
        if (Array.isArray(olStyle)) {
            olStyle = olStyle[0];
        }
        if (this.isStyleWithRadius(olStyle)) {
            return olStyle;
        }
        return undefined;
    }
}
GeometryFormFieldInputComponent.ɵfac = function GeometryFormFieldInputComponent_Factory(t) { return new (t || GeometryFormFieldInputComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NgControl, 10)); };
GeometryFormFieldInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryFormFieldInputComponent, selectors: [["igo-geometry-form-field-input"]], inputs: { map: "map", geometryType: "geometryType", drawGuide: "drawGuide", measure: "measure", drawControlIsActive: "drawControlIsActive", freehandDrawIsActive: "freehandDrawIsActive", controlOptions: "controlOptions", drawStyle: "drawStyle", overlayStyle: "overlayStyle", value: "value", radius: "radius" }, decls: 1, vars: 0, template: function GeometryFormFieldInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, GeometryFormFieldInputComponent_ng_template_0_Template, 0, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryFormFieldInputComponent, [{
        type: Component,
        args: [{
                selector: 'igo-geometry-form-field-input',
                templateUrl: './geometry-form-field-input.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { map: [{
            type: Input
        }], geometryType: [{
            type: Input
        }], drawGuide: [{
            type: Input
        }], measure: [{
            type: Input
        }], drawControlIsActive: [{
            type: Input
        }], freehandDrawIsActive: [{
            type: Input
        }], controlOptions: [{
            type: Input
        }], drawStyle: [{
            type: Input
        }], overlayStyle: [{
            type: Input
        }], value: [{
            type: Input
        }], radius: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnktZm9ybS1maWVsZC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9nZW9tZXRyeS9nZW9tZXRyeS1mb3JtLWZpZWxkL2dlb21ldHJ5LWZvcm0tZmllbGQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZ2VvbWV0cnkvZ2VvbWV0cnktZm9ybS1maWVsZC9nZW9tZXRyeS1mb3JtLWZpZWxkLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFFBQVEsRUFDUixJQUFJLEVBRUosdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sU0FBUyxNQUFNLG1CQUFtQixDQUFDO0FBRzFDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLGNBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLGFBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxLQUFLLE1BQU0sZUFBZSxDQUFDO0FBR2xDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIseUJBQXlCLEVBQ3pCLGFBQWEsRUFDYixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFPdEU7Ozs7O0dBS0c7QUFNSCxNQUFNLE9BQU8sK0JBQStCO0lBa00xQyxZQUNVLEtBQXdCLEVBQ0wsU0FBb0I7UUFEdkMsVUFB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LENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7OzhHQWppQlUsK0JBQStCO2tGQUEvQiwrQkFBK0I7UUNwRDVDLDZGQUEyQjs7dUZEb0RkLCtCQUErQjtjQUwzQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQXFNSSxRQUFROztzQkFBSSxJQUFJO3dCQTlLVixHQUFHO2tCQUFYLEtBQUs7WUFNRixZQUFZO2tCQURmLEtBQUs7WUFrQkcsU0FBUztrQkFBakIsS0FBSztZQUtHLE9BQU87a0JBQWYsS0FBSztZQU1GLG1CQUFtQjtrQkFEdEIsS0FBSztZQW9CRixvQkFBb0I7a0JBRHZCLEtBQUs7WUF5QkcsY0FBYztrQkFBdEIsS0FBSztZQU1GLFNBQVM7a0JBRFosS0FBSztZQWlDRixZQUFZO2tCQURmLEtBQUs7WUFVRixLQUFLO2tCQURSLEtBQUs7WUE0QkYsTUFBTTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd0NvbnRyb2xPcHRpb25zIH0gZnJvbSAnLi8uLi9zaGFyZWQvY29udHJvbHMvZHJhdyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgKiBhcyBPbFN0eWxlIGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCBPbEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04nO1xuaW1wb3J0IE9sR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeVR5cGUgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XG5pbXBvcnQgT2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IE9sVmVjdG9yU291cmNlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xuaW1wb3J0IE9sVmVjdG9yTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yJztcbmltcG9ydCBPbE92ZXJsYXkgZnJvbSAnb2wvT3ZlcmxheSc7XG5pbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgUG9pbnQgZnJvbSAnb2wvZ2VvbS9Qb2ludCc7XG5cbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5pbXBvcnQge1xuICBNZWFzdXJlTGVuZ3RoVW5pdCxcbiAgdXBkYXRlT2xHZW9tZXRyeU1pZHBvaW50cyxcbiAgZm9ybWF0TWVhc3VyZSxcbiAgbWVhc3VyZU9sR2VvbWV0cnlcbn0gZnJvbSAnLi4vLi4vbWVhc3VyZSc7XG5pbXBvcnQgeyBEcmF3Q29udHJvbCwgTW9kaWZ5Q29udHJvbCwgTW9kaWZ5Q29udHJvbE9wdGlvbnMgfSBmcm9tICcuLi9zaGFyZWQvY29udHJvbHMnO1xuaW1wb3J0IHsgY3JlYXRlRHJhd0ludGVyYWN0aW9uU3R5bGUgfSBmcm9tICcuLi9zaGFyZWQvZ2VvbWV0cnkudXRpbHMnO1xuaW1wb3J0IHsgR2VvSlNPTkdlb21ldHJ5IH0gZnJvbSAnLi4vc2hhcmVkL2dlb21ldHJ5LmludGVyZmFjZXMnO1xuaW1wb3J0IE9sQ2lyY2xlIGZyb20gJ29sL2dlb20vQ2lyY2xlJztcbmltcG9ydCBPbExpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nJztcbmltcG9ydCBPbFBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xuaW1wb3J0IE9sUG9seWdvbiBmcm9tICdvbC9nZW9tL1BvbHlnb24nO1xuXG4vKipcbiAqIFRoaXMgaW5wdXQgYWxsb3dzIGEgdXNlciB0byBkcmF3IGEgbmV3IGdlb21ldHJ5IG9yIHRvIGVkaXRcbiAqIGFuIGV4aXN0aW5nIG9uZSBvbiBhIG1hcC4gQSB0ZXh0IGlucHV0IGlzIGFsc28gZGlzcGxheWVkIGluIHRoZVxuICogZm9ybSB3aXRoIHNvbWUgaW5zdHJ1Y3Rpb25zLlxuICogVGhpcyBpcyBzdGlsbCBXSVAuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1nZW9tZXRyeS1mb3JtLWZpZWxkLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dlb21ldHJ5LWZvcm0tZmllbGQtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUZvcm1GaWVsZElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIG9sT3ZlcmxheUxheWVyOiBPbFZlY3RvckxheWVyPE9sVmVjdG9yU291cmNlPE9sR2VvbWV0cnk+PjtcbiAgcHJpdmF0ZSBvbEdlb0pTT04gPSBuZXcgT2xHZW9KU09OKCk7XG4gIHByaXZhdGUgcmVhZHkgPSBmYWxzZTtcblxuICBwcml2YXRlIGRyYXdDb250cm9sOiBEcmF3Q29udHJvbDtcbiAgcHJpdmF0ZSBtb2RpZnlDb250cm9sOiBNb2RpZnlDb250cm9sO1xuICBwcml2YXRlIGRlZmF1bHREcmF3U3R5bGVSYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBvbEdlb21ldHJ5RW5kcyQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb2xHZW9tZXRyeUNoYW5nZXMkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9sVG9vbHRpcCA9IHRoaXMuY3JlYXRlTWVhc3VyZVRvb2x0aXAoKTtcblxuICAvKipcbiAgICogQWN0aXZlIGNvbnRyb2xcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgYWN0aXZlQ29udHJvbDogRHJhd0NvbnRyb2wgfCBNb2RpZnlDb250cm9sO1xuXG4gIC8qKlxuICAgKiBUaGUgbWFwIHRvIGRyYXcgdGhlIGdlb21ldHJ5IG9uXG4gICAqL1xuICBASW5wdXQoKSBtYXA6IElnb01hcDtcblxuICAvKipcbiAgICogVGhlIGdlb21ldHJ5IHR5cGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBnZW9tZXRyeVR5cGUodmFsdWU6IHR5cGVvZiBPbEdlb21ldHJ5VHlwZSkge1xuICAgIHRoaXMuX2dlb21ldHJ5VHlwZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLnJlYWR5ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGVhY3RpdmF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLmNyZWF0ZURyYXdDb250cm9sKCk7XG4gICAgdGhpcy5kcmF3Q29udHJvbC5mcmVlaGFuZCQubmV4dCh0aGlzLmZyZWVoYW5kRHJhd0lzQWN0aXZlKTtcbiAgICB0aGlzLnRvZ2dsZUNvbnRyb2woKTtcbiAgfVxuICBnZXQgZ2VvbWV0cnlUeXBlKCk6IHR5cGVvZiBPbEdlb21ldHJ5VHlwZSB7IHJldHVybiB0aGlzLl9nZW9tZXRyeVR5cGU7IH1cbiAgcHJpdmF0ZSBfZ2VvbWV0cnlUeXBlOiB0eXBlb2YgT2xHZW9tZXRyeVR5cGU7XG5cbiAgLyoqXG4gICAqIFRoZSBkcmF3R3VpZGUgYXJvdW5kIHRoZSBtb3VzZSBwb2ludGVyIHRvIGhlbHAgZHJhd2luZ1xuICAgKi9cbiAgQElucHV0KCkgZHJhd0d1aWRlOiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgbWVhc3VyZSB0b29sdGlwIHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIG1lYXN1cmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciBkcmF3IGNvbnRyb2wgc2hvdWxkIGJlIGFjdGl2ZSBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkcmF3Q29udHJvbElzQWN0aXZlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZHJhd0NvbnRyb2xJc0FjdGl2ZTsgfVxuICBzZXQgZHJhd0NvbnRyb2xJc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RyYXdDb250cm9sSXNBY3RpdmUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5yZWFkeSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZWFjdGl2YXRlQ29udHJvbCgpO1xuICAgIGlmICghdGhpcy5fZHJhd0NvbnRyb2xJc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUNvbnRyb2woKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZHJhd0NvbnRyb2xJc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZnJlZWhhbmQgZHJhdyBjb250cm9sIHNob3VsZCBiZSBhY3RpdmUgb3Igbm90XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZnJlZWhhbmREcmF3SXNBY3RpdmUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9mcmVlaGFuZERyYXdJc0FjdGl2ZTsgfVxuICBzZXQgZnJlZWhhbmREcmF3SXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mcmVlaGFuZERyYXdJc0FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMuZGVhY3RpdmF0ZUNvbnRyb2woKTtcblxuICAgIHRoaXMuY3JlYXRlRHJhd0NvbnRyb2woKTtcbiAgICB0aGlzLmNyZWF0ZU1vZGlmeUNvbnRyb2woKTtcblxuICAgIHRoaXMuZHJhd0NvbnRyb2wuZnJlZWhhbmQkLm5leHQodGhpcy5mcmVlaGFuZERyYXdJc0FjdGl2ZSk7XG5cbiAgICBpZiAodGhpcy5yZWFkeSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZHJhd0NvbnRyb2xJc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUNvbnRyb2woKTtcbiAgfVxuICBwcml2YXRlIF9mcmVlaGFuZERyYXdJc0FjdGl2ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29udHJvbCBvcHRpb25zXG4gICAqL1xuICBASW5wdXQoKSBjb250cm9sT3B0aW9uczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICAvKipcbiAgICogU3R5bGUgZm9yIHRoZSBkcmF3IGNvbnRyb2wgKGFwcGxpZXMgd2hpbGUgdGhlIGdlb21ldHJ5IGlzIGJlaW5nIGRyYXduKVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGRyYXdTdHlsZSh2YWx1ZTogT2xTdHlsZS5TdHlsZSB8ICgoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4gT2xTdHlsZS5TdHlsZSkgfCBPbFN0eWxlLkNpcmNsZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGNyZWF0ZURyYXdJbnRlcmFjdGlvblN0eWxlKCk7XG4gICAgfVxuICAgIHRoaXMuX2RyYXdTdHlsZSA9IHZhbHVlO1xuXG4gICAgY29uc3Qgb2xHdWlkZVN0eWxlID0gdGhpcy5nZXRHdWlkZVN0eWxlRnJvbURyYXdTdHlsZSh2YWx1ZSkgYXMgT2xTdHlsZS5DaXJjbGU7XG4gICAgaWYgKG9sR3VpZGVTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRlZmF1bHREcmF3U3R5bGVSYWRpdXMgPSBvbEd1aWRlU3R5bGUuZ2V0UmFkaXVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVmYXVsdERyYXdTdHlsZVJhZGl1cyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVhZHkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kZWFjdGl2YXRlQ29udHJvbCgpO1xuICAgIHRoaXMuY3JlYXRlRHJhd0NvbnRyb2woKTtcbiAgICB0aGlzLmNyZWF0ZU1vZGlmeUNvbnRyb2woKTtcblxuICAgIHRoaXMuZHJhd0NvbnRyb2wuZnJlZWhhbmQkLm5leHQodGhpcy5mcmVlaGFuZERyYXdJc0FjdGl2ZSk7XG4gICAgdGhpcy50b2dnbGVDb250cm9sKCk7XG4gIH1cbiAgZ2V0IGRyYXdTdHlsZSgpOiBPbFN0eWxlLlN0eWxlIHwgKChmZWF0dXJlLCByZXNvbHV0aW9uKSA9PiBPbFN0eWxlLlN0eWxlKSB8IE9sU3R5bGUuQ2lyY2xlIHsgcmV0dXJuIHRoaXMuX2RyYXdTdHlsZTsgfVxuICBwcml2YXRlIF9kcmF3U3R5bGU6IE9sU3R5bGUuU3R5bGUgfCAoKGZlYXR1cmUsIHJlc29sdXRpb24pID0+IE9sU3R5bGUuU3R5bGUpIHwgT2xTdHlsZS5DaXJjbGU7XG5cbiAgLyoqXG4gICAqIFN0eWxlIGZvciB0aGUgb3ZlcmxheSBsYXllciAoYXBwbGllcyBvbmNlIHRoZSBnZW9tZXRyeSBpcyBhZGRlZCB0byB0aGUgbWFwKVxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBkcmF3U3R5bGUgYXBwbGllc1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG92ZXJsYXlTdHlsZSh2YWx1ZTogT2xTdHlsZS5TdHlsZSB8ICgoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4gT2xTdHlsZS5TdHlsZSkgfCBPbFN0eWxlLkNpcmNsZSkgeyB0aGlzLl9vdmVybGF5U3R5bGUgPSB2YWx1ZTsgfVxuICBnZXQgb3ZlcmxheVN0eWxlKCk6IE9sU3R5bGUuU3R5bGUgfCAoKGZlYXR1cmUsIHJlc29sdXRpb24pID0+IE9sU3R5bGUuU3R5bGUpIHwgT2xTdHlsZS5DaXJjbGUgeyByZXR1cm4gdGhpcy5fb3ZlcmxheVN0eWxlOyB9XG4gIHByaXZhdGUgX292ZXJsYXlTdHlsZTogT2xTdHlsZS5TdHlsZSB8ICgoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4gT2xTdHlsZS5TdHlsZSkgfCBPbFN0eWxlLkNpcmNsZTtcblxuICAvKipcbiAgICogVGhlIGdlb21ldHJ5IHZhbHVlIChHZW9KU09OKVxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlOiBHZW9KU09OR2VvbWV0cnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLnJlYWR5ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hZGRHZW9KU09OVG9PdmVybGF5KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbE92ZXJsYXlTb3VyY2UuY2xlYXIodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMudG9nZ2xlQ29udHJvbCgpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIGdldCB2YWx1ZSgpOiBHZW9KU09OR2VvbWV0cnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgcHJpdmF0ZSBfdmFsdWU6IEdlb0pTT05HZW9tZXRyeTtcblxuICAvKipcbiAgICogVGhlIHZlY3RvciBzb3VyY2UgdG8gYWRkIHRoZSBnZW9tZXRyeSB0b1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBvbE92ZXJsYXlTb3VyY2UoKTogT2xWZWN0b3JTb3VyY2U8T2xHZW9tZXRyeT4ge1xuICAgIHJldHVybiB0aGlzLm9sT3ZlcmxheUxheWVyLmdldFNvdXJjZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJhZGl1cyh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMucmVhZHkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGlmeUNvbnRyb2wuZ2V0U291cmNlKCkpIHtcbiAgICAgIHRoaXMubW9kaWZ5Q29udHJvbC5nZXRTb3VyY2UoKS5yZWZyZXNoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyZWVoYW5kRHJhd0lzQWN0aXZlKSB7XG4gICAgICBsZXQgb2xNb2RpZnk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2xNb2RpZnkgPSB0aGlzLm1vZGlmeUNvbnRyb2wub2xNb2RpZnlJbnRlcmFjdGlvbjtcbiAgICAgICAgaWYgKG9sTW9kaWZ5KSB7XG4gICAgICAgICAgaWYgKG9sTW9kaWZ5LmZlYXR1cmVzXykge1xuICAgICAgICAgICAgb2xNb2RpZnkuZmVhdHVyZXNfLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmFkZEdlb0pTT05Ub092ZXJsYXkodGhpcy52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2V0dGluZyB0aGUgdmFsdWUgYWNjZXNzb3IgZGlyZWN0bHkgKGluc3RlYWQgb2YgdXNpbmdcbiAgICAgIC8vIHRoZSBwcm92aWRlcnMpIHRvIGF2b2lkIHJ1bm5pbmcgaW50byBhIGNpcmN1bGFyIGltcG9ydC5cbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gb3ZlcmxheSBsYXllciwgYWRkIHRoZSBpbml0aWFsIGdlb21ldHJ5IHRvIGl0IChpZiBhbnkpXG4gICAqIGFuZCB0b2dnbGUgdGhlIHJpZ2h0IGludGVyYWN0aW9uLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRyYXdTdHlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRyYXdTdHlsZSA9IGNyZWF0ZURyYXdJbnRlcmFjdGlvblN0eWxlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3ZlcmxheVN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub3ZlcmxheVN0eWxlID0gdGhpcy5kcmF3U3R5bGU7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRPbE92ZXJsYXlMYXllcigpO1xuICAgIHRoaXMuY3JlYXRlRHJhd0NvbnRyb2woKTtcbiAgICB0aGlzLmNyZWF0ZU1vZGlmeUNvbnRyb2woKTtcblxuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmFkZEdlb0pTT05Ub092ZXJsYXkodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlQ29udHJvbCgpO1xuXG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIG92ZXJsYXkgbGF5ZXIgYW5kIGFueSBpbnRlcmFjdGlvbiBhZGRlZCBieSB0aGlzIGNvbXBvbmVudC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBUaGlzIGlzIG1hbmRhdG9yeSB3aGVuIHRoZSBmb3JtIGNvbnRyb2wgaXMgcmV1c2VkIGFmdGVyXG4gICAgLy8gdGhpcyBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiBJdCBzZWVtcyBsaWtlIHRoZSBjb250cm9sXG4gICAgLy8ga2VlcHMgYSByZWZlcmVuY2UgdG8gdGhpcyBjb21wb25lbnQgZXZlbiBhZnRlciBpdCdzIGRlc3Ryb3llZFxuICAgIC8vIGFuZCBpdCBhdHRlbXB0cyB0byBzZXQgaXQncyB2YWx1ZVxuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcblxuICAgIHRoaXMuZGVhY3RpdmF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLm9sT3ZlcmxheVNvdXJjZS5jbGVhcigpO1xuICAgIHRoaXMubWFwLm9sLnJlbW92ZUxheWVyKHRoaXMub2xPdmVybGF5TGF5ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICBwcml2YXRlIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbiAgcHJpdmF0ZSBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogR2VvSlNPTkdlb21ldHJ5KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBvdmVybGF5IGxheWVyIHRvIHRoZSBtYXBcbiAgICovXG4gIHByaXZhdGUgYWRkT2xPdmVybGF5TGF5ZXIoKSB7XG4gICAgdGhpcy5vbE92ZXJsYXlMYXllciA9IG5ldyBPbFZlY3RvckxheWVyKHtcbiAgICAgIHNvdXJjZTogbmV3IE9sVmVjdG9yU291cmNlKCksXG4gICAgICB6SW5kZXg6IDUwMCxcbiAgICAgIHN0eWxlOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5tYXAub2wuYWRkTGF5ZXIodGhpcy5vbE92ZXJsYXlMYXllcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZHJhdyBjb250cm9sIGFuZCBzdWJzY3JpYmUgdG8gaXQncyBnZW9tZXRyeVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVEcmF3Q29udHJvbCgpIHtcbiAgICBjb25zdCBjb250cm9sT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udHJvbE9wdGlvbnMsIHtcbiAgICAgIGdlb21ldHJ5VHlwZTogdGhpcy5nZW9tZXRyeVR5cGUgfHwgJ1BvaW50JyxcbiAgICAgIGRyYXdpbmdMYXllcjogdGhpcy5vbE92ZXJsYXlMYXllcixcbiAgICAgIGludGVyYWN0aW9uU3R5bGU6IHR5cGVvZiB0aGlzLmRyYXdTdHlsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuZHJhd1N0eWxlIDogKG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+LCByZXNvbHV0aW9uOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRyYXdTdHlsZTtcbiAgICAgICAgdGhpcy51cGRhdGVEcmF3U3R5bGVXaXRoRHJhd0d1aWRlKHN0eWxlLCByZXNvbHV0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuICAgIH0pIGFzIERyYXdDb250cm9sT3B0aW9ucztcbiAgICB0aGlzLmRyYXdDb250cm9sID0gbmV3IERyYXdDb250cm9sKGNvbnRyb2xPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBtb2RpZnkgY29udHJvbCBhbmQgc3Vic2NyaWJlIHRvIGl0J3MgZ2VvbWV0cnlcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlTW9kaWZ5Q29udHJvbCgpIHtcbiAgICBjb25zdCBjb250cm9sT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udHJvbE9wdGlvbnMsIHtcbiAgICAgIGxheWVyOiB0aGlzLm9sT3ZlcmxheUxheWVyLFxuICAgICAgZHJhd1N0eWxlOiB0eXBlb2YgdGhpcy5kcmF3U3R5bGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLmRyYXdTdHlsZSA6IChvbEZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PiwgcmVzb2x1dGlvbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kcmF3U3R5bGU7XG4gICAgICAgIHRoaXMudXBkYXRlRHJhd1N0eWxlV2l0aERyYXdHdWlkZShzdHlsZSwgcmVzb2x1dGlvbik7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH1cbiAgICB9KSBhcyBNb2RpZnlDb250cm9sT3B0aW9ucztcbiAgICB0aGlzLm1vZGlmeUNvbnRyb2wgPSBuZXcgTW9kaWZ5Q29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBwcm9wZXIgY29udHJvbCAoZHJhdyBvciBtb2RpZnkpXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZUNvbnRyb2woKSB7XG4gICAgbGV0IGFjdGl2YXRlO1xuICAgIGlmICghdGhpcy52YWx1ZSAmJiB0aGlzLmdlb21ldHJ5VHlwZSkge1xuICAgICAgYWN0aXZhdGUgPSB0aGlzLmRyYXdDb250cm9sO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmF0ZSA9IHRoaXMubW9kaWZ5Q29udHJvbDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY29udHJvbCB0aGF0IHNob3VsZCBiZSBhY3RpdmF0ZWRcbiAgICAvLyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgYWN0aXZlIGNvbnRyb2wsXG4gICAgLy8gZGVhY3RpdmF0ZSB0aGUgY3VycmVudCBjb250cm9sIGFuZCBhY3RpdmF0ZSB0aGUgbmV3IG9uZVxuICAgIC8vIE90aGVyd2lzZSwgZG8gbm90aGluZyBhbmQga2VlcCB0aGUgY3VycmVudCBjb250cm9sIGFjdGl2ZVxuICAgIGlmIChhY3RpdmF0ZSAhPT0gdGhpcy5hY3RpdmVDb250cm9sKSB7XG4gICAgICB0aGlzLmRlYWN0aXZhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFjdGl2YXRlQ29udHJvbChhY3RpdmF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIGEgZ2l2ZW4gY29udHJvbFxuICAgKiBAcGFyYW0gY29udHJvbCBDb250cm9sXG4gICAqL1xuICBwcml2YXRlIGFjdGl2YXRlQ29udHJvbChjb250cm9sOiBEcmF3Q29udHJvbCB8IE1vZGlmeUNvbnRyb2wpIHtcbiAgICB0aGlzLmFjdGl2ZUNvbnRyb2wgPSBjb250cm9sO1xuICAgIHRoaXMub2xHZW9tZXRyeUVuZHMkJCA9IGNvbnRyb2wuZW5kJFxuICAgICAgLnN1YnNjcmliZSgob2xHZW9tZXRyeTogT2xHZW9tZXRyeSkgPT4gdGhpcy5vbk9sR2VvbWV0cnlFbmRzKG9sR2VvbWV0cnkpKTtcbiAgICBpZiAodGhpcy5tZWFzdXJlID09PSB0cnVlICYmIGNvbnRyb2wgPT09IHRoaXMuZHJhd0NvbnRyb2wpIHtcbiAgICAgIHRoaXMub2xHZW9tZXRyeUNoYW5nZXMkJCA9IGNvbnRyb2wuY2hhbmdlcyRcbiAgICAgICAgLnN1YnNjcmliZSgob2xHZW9tZXRyeTogT2xQb2x5Z29uIHwgT2xQb2ludCB8IE9sTGluZVN0cmluZyB8IE9sQ2lyY2xlKSA9PiB0aGlzLm9uT2xHZW9tZXRyeUNoYW5nZXMob2xHZW9tZXRyeSkpO1xuICAgIH1cbiAgICBjb250cm9sLnNldE9sTWFwKHRoaXMubWFwLm9sLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZSB0aGUgYWN0aXZlIGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgZGVhY3RpdmF0ZUNvbnRyb2woKSB7XG4gICAgdGhpcy5yZW1vdmVNZWFzdXJlVG9vbHRpcCgpO1xuICAgIGlmICh0aGlzLmFjdGl2ZUNvbnRyb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hY3RpdmVDb250cm9sLnNldE9sTWFwKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9sR2VvbWV0cnlFbmRzJCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbEdlb21ldHJ5RW5kcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9sR2VvbWV0cnlDaGFuZ2VzJCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbEdlb21ldHJ5Q2hhbmdlcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlQ29udHJvbCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgbWVhc3VyZXMgb2JzZXJ2YWJsZXMgYW5kIG1hcCB0b29sdGlwc1xuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPbCBsaW5lc3RyaW5nIG9yIHBvbHlnb25cbiAgICovXG4gIHByaXZhdGUgb25PbEdlb21ldHJ5RW5kcyhvbEdlb21ldHJ5OiBPbEdlb21ldHJ5IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5yZW1vdmVNZWFzdXJlVG9vbHRpcCgpO1xuICAgIHRoaXMuc2V0T2xHZW9tZXRyeShvbEdlb21ldHJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgbWVhc3VyZXMgb2JzZXJ2YWJsZXMgYW5kIG1hcCB0b29sdGlwc1xuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPbCBsaW5lc3RyaW5nIG9yIHBvbHlnb25cbiAgICovXG4gIHByaXZhdGUgb25PbEdlb21ldHJ5Q2hhbmdlcyhvbEdlb21ldHJ5OiBPbFBvbHlnb24gfCBPbFBvaW50IHwgT2xMaW5lU3RyaW5nIHwgT2xDaXJjbGUpIHtcbiAgICBpZiAob2xHZW9tZXRyeS5nZXRUeXBlKCkgIT09ICdQb2ludCcpIHtcbiAgICAgIHRoaXMudXBkYXRlTWVhc3VyZVRvb2x0aXAob2xHZW9tZXRyeSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZHJhd2luZyBlbmRzLCBjb252ZXJ0IHRoZSBvdXRwdXQgdmFsdWUgdG8gR2VvSlNPTiBhbmQga2VlcCBpdC5cbiAgICogUmVzdG9yZSB0aGUgZG91YmxlIGNsaWNrIGludGVyYWN0aW9uLlxuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBnZW9tZXRyeVxuICAgKi9cbiAgcHJpdmF0ZSBzZXRPbEdlb21ldHJ5KG9sR2VvbWV0cnk6IE9sR2VvbWV0cnkgfCB1bmRlZmluZWQpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKG9sR2VvbWV0cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbEdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ0NpcmNsZScpIHsgLy8gQmVjYXVzZSBDaXJjbGUgZG9lc24ndCBleGlzdCBhcyBhIEdlb0pTT04gb2JqZWN0XG4gICAgICBvbEdlb21ldHJ5ID0gdGhpcy5jaXJjbGVUb1BvaW50KG9sR2VvbWV0cnkpO1xuICAgIH1cblxuICAgIHZhbHVlID0gdGhpcy5vbEdlb0pTT04ud3JpdGVHZW9tZXRyeU9iamVjdChvbEdlb21ldHJ5LCB7XG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogdGhpcy5tYXAucHJvamVjdGlvbixcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2J1xuICAgIH0pO1xuICAgIGlmIChvbEdlb21ldHJ5LmdldCgncmFkaXVzJykpIHtcbiAgICAgIHZhbHVlLnJhZGl1cyA9IG9sR2VvbWV0cnkuZ2V0KCdyYWRpdXMnKTtcbiAgICAgIG9sR2VvbWV0cnkuc2V0KCdyYWRpdXMnLCB2YWx1ZS5yYWRpdXMpO1xuICAgIH1cbiAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaXJjbGVUb1BvaW50KG9sR2VvbWV0cnkpIHtcbiAgICBjb25zdCBjZW50ZXIgPSBvbEdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gb2xwcm9qLnRyYW5zZm9ybShjZW50ZXIsIHRoaXMubWFwLnByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLnJvdW5kKG9sR2VvbWV0cnkuZ2V0UmFkaXVzKCkgKiAoTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogY29vcmRpbmF0ZXNbMV0pKSk7XG5cbiAgICAvLyBDb252ZXJ0IGl0IHRvIGEgcG9pbnQgb2JqZWN0XG4gICAgb2xHZW9tZXRyeSA9IG5ldyBQb2ludChjZW50ZXIpO1xuICAgIG9sR2VvbWV0cnkuc2V0KCdyYWRpdXMnLCByYWRpdXMsIHRydWUpO1xuICAgIHJldHVybiBvbEdlb21ldHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIEdlb0pTT04gZ2VvbWV0cnkgdG8gdGhlIG92ZXJsYXlcbiAgICogQHBhcmFtIGdlb21ldHJ5IEdlb0pTT04gZ2VvbWV0cnlcbiAgICovXG4gIHByaXZhdGUgYWRkR2VvSlNPTlRvT3ZlcmxheShnZW9tZXRyeTogR2VvSlNPTkdlb21ldHJ5KSB7XG4gICAgY29uc3Qgb2xHZW9tZXRyeSA9IHRoaXMub2xHZW9KU09OLnJlYWRHZW9tZXRyeShnZW9tZXRyeSwge1xuICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwLnByb2plY3Rpb25cbiAgICB9KTtcbiAgICBjb25zdCBvbEZlYXR1cmUgPSBuZXcgT2xGZWF0dXJlKHtcbiAgICAgIGdlb21ldHJ5OiBvbEdlb21ldHJ5XG4gICAgfSk7XG4gICAgb2xGZWF0dXJlLnNldFN0eWxlKHRoaXMub3ZlcmxheVN0eWxlIGFzIE9sU3R5bGUuU3R5bGUpO1xuICAgIHRoaXMub2xPdmVybGF5U291cmNlLmNsZWFyKCk7XG4gICAgdGhpcy5vbE92ZXJsYXlTb3VyY2UuYWRkRmVhdHVyZShvbEZlYXR1cmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgbWVhc3VyZSB0b29sdGlwXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZU1lYXN1cmVUb29sdGlwKCkge1xuICAgIHJldHVybiBuZXcgT2xPdmVybGF5KHtcbiAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgb2Zmc2V0OiBbLTMwLCAtMTBdLFxuICAgICAgY2xhc3NOYW1lOiBbXG4gICAgICAgICdpZ28tbWFwLXRvb2x0aXAnLFxuICAgICAgICAnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUnXG4gICAgICBdLmpvaW4oJyAnKSxcbiAgICAgIHN0b3BFdmVudDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIG1lYXN1cmUgdG9vbHRpcCBvZiBhbiBPTCBnZW9tZXRyeVxuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVNZWFzdXJlVG9vbHRpcChvbEdlb21ldHJ5OiBPbFBvbHlnb24gfCBPbFBvaW50IHwgT2xMaW5lU3RyaW5nIHwgT2xDaXJjbGUpIHtcbiAgICBjb25zdCBtZWFzdXJlID0gbWVhc3VyZU9sR2VvbWV0cnkob2xHZW9tZXRyeSwgdGhpcy5tYXAucHJvamVjdGlvbik7XG4gICAgY29uc3QgbGVuZ3RocyA9IG1lYXN1cmUubGVuZ3RocztcbiAgICBjb25zdCBsYXN0SW5kZXggPSBvbEdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ1BvbHlnb24nID8gbGVuZ3Rocy5sZW5ndGggLSAyIDogbGVuZ3Rocy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGxhc3RMZW5ndGggPSBsZW5ndGhzW2xhc3RJbmRleF07XG5cbiAgICBjb25zdCBvbE1pZHBvaW50cyA9IHVwZGF0ZU9sR2VvbWV0cnlNaWRwb2ludHMob2xHZW9tZXRyeSk7XG4gICAgY29uc3Qgb2xMYXN0TWlkcG9pbnQgPSBvbE1pZHBvaW50c1tsYXN0SW5kZXhdO1xuICAgIGlmIChvbE1pZHBvaW50cy5sZW5ndGggPT09IDAgfHwgb2xMYXN0TWlkcG9pbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZW1vdmVNZWFzdXJlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2xUb29sdGlwLnNldFBvc2l0aW9uKG9sTGFzdE1pZHBvaW50LmdldEZsYXRDb29yZGluYXRlcygpKTtcblxuICAgIGNvbnN0IGlubmVySHRtbCA9IGZvcm1hdE1lYXN1cmUobGFzdExlbmd0aCwge1xuICAgICAgZGVjaW1hbDogMSxcbiAgICAgIHVuaXQ6IE1lYXN1cmVMZW5ndGhVbml0Lk1ldGVycyxcbiAgICAgIHVuaXRBYmJyOiB0cnVlLFxuICAgICAgbG9jYWxlOiAnZnInXG4gICAgfSk7XG4gICAgdGhpcy5vbFRvb2x0aXAuZ2V0RWxlbWVudCgpLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICBpZiAodGhpcy5vbFRvb2x0aXAuZ2V0TWFwKCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tYXAub2wuYWRkT3ZlcmxheSh0aGlzLm9sVG9vbHRpcCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWVhc3VyZSB0b29sdGlwIGZyb20gdGhlIG1hcFxuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVNZWFzdXJlVG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5vbFRvb2x0aXAuZ2V0TWFwICYmIHRoaXMub2xUb29sdGlwLmdldE1hcCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWFwLm9sLnJlbW92ZU92ZXJsYXkodGhpcy5vbFRvb2x0aXApO1xuICAgICAgdGhpcy5vbFRvb2x0aXAuc2V0TWFwKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdCB0aGUgZHJhdyBzdHlsZSB3aXRoIHRoZSBzcGVjaWZpZWQgZHJhdyBndWlkZSBkaXN0YW5jZSwgaWYgcG9zc2libGVcbiAgICogQHBhcmFtIG9sU3R5bGUgRHJhdyBzdHlsZSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHJlc29sdXRpb24gUmVzb2x1dGlvbiAodG8gbWFrZSB0aGUgc2NyZWVuIHNpemUgb2Ygc3ltYm9sIGZpdCB0aGUgZHJhd0d1aWRlIHZhbHVlKVxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVEcmF3U3R5bGVXaXRoRHJhd0d1aWRlKFxuICAgIG9sU3R5bGU6IE9sU3R5bGUuU3R5bGUgfFxuICAgICgoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4gT2xTdHlsZS5TdHlsZSkgfFxuICAgIE9sU3R5bGUuQ2lyY2xlLFxuICAgIHJlc29sdXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IG9sR3VpZGVTdHlsZSA9IHRoaXMuZ2V0R3VpZGVTdHlsZUZyb21EcmF3U3R5bGUob2xTdHlsZSkgYXMgT2xTdHlsZS5DaXJjbGU7XG4gICAgaWYgKG9sR3VpZGVTdHlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0d1aWRlID0gdGhpcy5kcmF3R3VpZGU7XG4gICAgbGV0IHJhZGl1cztcbiAgICBpZiAoIWRyYXdHdWlkZSB8fCBkcmF3R3VpZGUgPCAwKSB7XG4gICAgICByYWRpdXMgPSB0aGlzLmRlZmF1bHREcmF3U3R5bGVSYWRpdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhZGl1cyA9IGRyYXdHdWlkZSA+IDAgPyBkcmF3R3VpZGUgLyByZXNvbHV0aW9uIDogZHJhd0d1aWRlO1xuICAgIH1cbiAgICBvbEd1aWRlU3R5bGUuc2V0UmFkaXVzKHJhZGl1cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3ZXRoZXIgYSBnaXZlbiBPcGVuIExheWVycyBzdHlsZSBoYXMgYSByYWRpdXMgcHJvcGVydHkgdGhhdCBjYW4gYmUgc2V0ICh1c2VkIHRvIHNldCBkcmF3IGd1aWRlKVxuICAgKiBAcGFyYW0gb2xTdHlsZSBUaGUgc3R5bGUgb24gd2hpY2ggdG8gcGVyZm9ybSB0aGUgY2hlY2tcbiAgICovXG4gIHByaXZhdGUgaXNTdHlsZVdpdGhSYWRpdXMob2xTdHlsZSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2xTdHlsZSAhPT0gJ2Z1bmN0aW9uJyAmJiBvbFN0eWxlLnNldFJhZGl1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdldGhlciBhIGdpdmVuIE9wZW4gTGF5ZXJzIHN0eWxlIGhhcyBhIHJhZGl1cyBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzZXQgKHVzZWQgdG8gc2V0IGRyYXcgZ3VpZGUpXG4gICAqIEBwYXJhbSBvbFN0eWxlIFRoZSBzdHlsZSBvbiB3aGljaCB0byBwZXJmb3JtIHRoZSBjaGVja1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRHdWlkZVN0eWxlRnJvbURyYXdTdHlsZShcbiAgICBvbFN0eWxlOiBPbFN0eWxlLlN0eWxlIHwgKChmZWF0dXJlLCByZXNvbHV0aW9uKSA9PiBPbFN0eWxlLlN0eWxlKSB8IE9sU3R5bGUuQ2lyY2xlIHxcbiAgICBPbFN0eWxlLlN0eWxlW10gfCAoKGZlYXR1cmUsIHJlc29sdXRpb24pID0+IE9sU3R5bGUuU3R5bGUpW10gfCBPbFN0eWxlLkNpcmNsZVtdXG4gICkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9sU3R5bGUpKSB7XG4gICAgICBvbFN0eWxlID0gb2xTdHlsZVswXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNTdHlsZVdpdGhSYWRpdXMob2xTdHlsZSkpIHtcbiAgICAgIHJldHVybiBvbFN0eWxlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4iXX0=