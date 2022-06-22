import { EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { Form } from '../shared/form.interfaces';
import * as i0 from "@angular/core";
/**
 * A configurable form
 */
export declare class FormComponent implements OnChanges {
    /**
     * Form
     */
    form: Form;
    /**
     * Input data
     */
    formData: {
        [key: string]: any;
    };
    /**
     * Form autocomplete
     */
    autocomplete: string;
    /**
     * Event emitted when the form is submitted
     */
    submitForm: EventEmitter<{
        [key: string]: any;
    }>;
    buttons: ElementRef;
    get hasButtons(): boolean;
    constructor();
    /**
     * Is the entity or the template change, recreate the form or repopulate it.
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Transform the form data to a feature and emit an event
     * @param event Form submit event
     * @internal
     */
    onSubmit(): void;
    getData(): {
        [key: string]: any;
    };
    private setData;
    private updateDataWithFormField;
    /**
     * Clear form
     */
    private clear;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormComponent, "igo-form", never, { "form": "form"; "formData": "formData"; "autocomplete": "autocomplete"; }, { "submitForm": "submitForm"; }, never, ["*", "[formButtons]"]>;
}
