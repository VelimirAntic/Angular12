import { FormField, FormFieldInputs, FormFieldOptions } from '../shared/form.interfaces';
import { FormFieldService } from '../shared/form-field.service';
import * as i0 from "@angular/core";
/**
 * This component renders the proper form input based on
 * the field configuration it receives.
 */
export declare class FormFieldComponent {
    private formFieldService;
    /**
     * Field configuration
     */
    field: FormField;
    /**
     * Field inputs cache
     */
    private fieldInputs;
    /**
     * Field subscribers cache
     */
    private fieldSubscribers;
    get fieldOptions(): FormFieldOptions;
    constructor(formFieldService: FormFieldService);
    getFieldComponent(): any;
    getFieldInputs(): FormFieldInputs;
    getFieldSubscribers(): {
        [key: string]: ({ field: FormField, control: FormControl }: {
            field: any;
            control: any;
        }) => void;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldComponent, "igo-form-field", never, { "field": "field"; }, {}, never, never>;
}
