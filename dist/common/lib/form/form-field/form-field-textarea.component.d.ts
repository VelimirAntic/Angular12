import { OnInit } from '@angular/core';
import type { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * This component renders a textarea field
 */
export declare class FormFieldTextareaComponent implements OnInit {
    disabled$: BehaviorSubject<boolean>;
    /**
     * The field's form control
     */
    formControl: FormControl;
    /**
     * Field placeholder
     */
    placeholder: string;
    /**
     * Field placeholder
     */
    errors: {
        [key: string]: string;
    };
    /**
     * Wheter a disable switch should be available
     */
    disableSwitch: boolean;
    /**
     * Whether the field is required
     */
    get required(): boolean;
    ngOnInit(): void;
    /**
     * Get error message
     */
    getErrorMessage(): string;
    onDisableSwitchClick(): void;
    private toggleDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldTextareaComponent, "igo-form-field-textarea", never, { "formControl": "formControl"; "placeholder": "placeholder"; "errors": "errors"; "disableSwitch": "disableSwitch"; }, {}, never, never>;
}
