import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form } from '@igo2/common';
import type { FormComponent } from '@igo2/common';
import { Feature } from '../shared/feature.interfaces';
import * as i0 from "@angular/core";
/**
 * A configurable form, optionnally bound to a feature.
 * This component creates an entity form and, on submit,
 * returns a feature made out of the submitted data. It also
 * does things like managing the feature visibility while it's being updated
 * as well as disabling the selection of another feature.
 */
export declare class FeatureFormComponent {
    /**
     * Form
     */
    form: Form;
    /**
     * Feature to update
     */
    set feature(value: Feature | undefined);
    get feature(): Feature | undefined;
    readonly feature$: BehaviorSubject<Feature>;
    /**
     * Event emitted when the form is submitted
     */
    submitForm: EventEmitter<Feature<{
        [key: string]: any;
    }>>;
    igoForm: FormComponent;
    constructor();
    /**
     * Transform the form data to a feature and emit an event
     * @param event Form submit event
     * @internal
     */
    onSubmit(data: {
        [key: string]: any;
    }): void;
    getData(): Feature;
    /**
     * Transform the form data to a feature
     * @param data Form data
     * @returns A feature
     */
    private formDataToFeature;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeatureFormComponent, "igo-feature-form", never, { "form": "form"; "feature": "feature"; }, { "submitForm": "submitForm"; }, never, ["*", "[formButtons]"]>;
}
